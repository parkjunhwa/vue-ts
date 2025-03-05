<script setup lang="ts">
import { Placeholder } from "@tiptap/extension-placeholder";
import { TextAlign } from "@tiptap/extension-text-align";
import { Underline } from "@tiptap/extension-underline";
import { StarterKit } from "@tiptap/starter-kit";
import { EditorContent, useEditor } from "@tiptap/vue-3";

const props = defineProps<{
  modelValue: string
  placeholder?: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const editorRef = ref()

const editor = useEditor({
  content: props.modelValue,
  editable: !props.readonly, // ✅ readonly 상태 반영
  extensions: [
    StarterKit,
    TextAlign.configure({
      types: ["heading", "paragraph"],
    }),
    Placeholder.configure({
      placeholder: props.placeholder ?? "Write something here...",
    }),
    Underline,
  ],
  onUpdate() {
    if (!editor.value)
      return

    emit('update:modelValue', editor.value.getHTML())
  },
})

watch(() => props.modelValue, () => {
  const isSame = editor.value?.getHTML() === props.modelValue

  if (isSame)
    return

  editor.value?.commands.setContent(props.modelValue)
})
</script>

<template>
  <div>
    <!-- 툴바는 readonly일 때 숨김 -->
    <div
      v-if="editor"
      class="d-flex gap-2 py-2 px-6 flex-wrap align-center editor"
    >
      <IconBtn
        size="small"
        rounded
        :variant="editor.isActive('bold') ? 'tonal' : 'text'"
        :color="editor.isActive('bold') ? 'primary' : 'default'"
        @click="editor.chain().focus().toggleBold().run()"
      >
        <VIcon icon="tabler-bold" />
      </IconBtn>

      <IconBtn
        size="small"
        rounded
        :variant="editor.isActive('underline') ? 'tonal' : 'text'"
        :color="editor.isActive('underline') ? 'primary' : 'default'"
        @click="editor.commands.toggleUnderline()"
      >
        <VIcon icon="tabler-underline" />
      </IconBtn>

      <IconBtn
        size="small"
        rounded
        :variant="editor.isActive('italic') ? 'tonal' : 'text'"
        :color="editor.isActive('italic') ? 'primary' : 'default'"
        @click="editor.chain().focus().toggleItalic().run()"
      >
        <VIcon icon="tabler-italic" class="font-weight-medium" />
      </IconBtn>

      <IconBtn
        size="small"
        rounded
        :variant="editor.isActive('strike') ? 'tonal' : 'text'"
        :color="editor.isActive('strike') ? 'primary' : 'default'"
        @click="editor.chain().focus().toggleStrike().run()"
      >
        <VIcon icon="tabler-strikethrough" />
      </IconBtn>

      <IconBtn
        size="small"
        rounded
        :variant="editor.isActive({ textAlign: 'left' }) ? 'tonal' : 'text'"
        :color="editor.isActive({ textAlign: 'left' }) ? 'primary' : 'default'"
        @click="editor.chain().focus().setTextAlign('left').run()"
      >
        <VIcon icon="tabler-align-left" />
      </IconBtn>

      <IconBtn
        size="small"
        rounded
        :color="
          editor.isActive({ textAlign: 'center' }) ? 'primary' : 'default'
        "
        :variant="editor.isActive({ textAlign: 'center' }) ? 'tonal' : 'text'"
        @click="editor.chain().focus().setTextAlign('center').run()"
      >
        <VIcon icon="tabler-align-center" />
      </IconBtn>

      <IconBtn
        size="small"
        rounded
        :variant="editor.isActive({ textAlign: 'right' }) ? 'tonal' : 'text'"
        :color="editor.isActive({ textAlign: 'right' }) ? 'primary' : 'default'"
        @click="editor.chain().focus().setTextAlign('right').run()"
      >
        <VIcon icon="tabler-align-right" />
      </IconBtn>

      <IconBtn
        size="small"
        rounded
        :variant="editor.isActive({ textAlign: 'justify' }) ? 'tonal' : 'text'"
        :color="
          editor.isActive({ textAlign: 'justify' }) ? 'primary' : 'default'
        "
        @click="editor.chain().focus().setTextAlign('justify').run()"
      >
        <VIcon icon="tabler-align-justified" />
      </IconBtn>
    </div>

    <VDivider v-if="!readonly" />

    <EditorContent
      ref="editorRef"
      :editor="editor"
    />
  </div>
</template>

<style lang="scss">
.ProseMirror {
  padding: 0.5rem;
  min-block-size: 15vh;
  outline: none;
  color: rgba(var(--v-theme-on-surface), var(--v-high-emphasis-opacity));

  p {
    margin-block-end: 0;
  }

  p.is-editor-empty:first-child::before {
    block-size: 0;
    content: attr(data-placeholder);
    float: inline-start;
    pointer-events: none;
  }
}

/* ✅ readonly 상태일 때 스타일 */
.editor-readonly {
  .v-divider {
    display: none;

    border-color: rgba(47, 43, 61, 0.7);
  }
  .ProseMirror {
    cursor: not-allowed;
    pointer-events: none;
  }
  opacity: 1;
  border-radius: 6px;
  background: rgba(var(--v-theme-on-surface), var(--v-hover-opacity));
  color: rgb(var(--v-theme-on-background), var(--v-high-emphasis-opacity));
}
</style>
