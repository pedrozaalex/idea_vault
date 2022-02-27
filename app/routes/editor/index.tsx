import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { Underline } from '@tiptap/extension-underline';
import { Typography } from '@tiptap/extension-typography';

export default function Editor() {
  const editor = useEditor({
    extensions: [StarterKit, Underline, Typography],
    autofocus: true,
    enablePasteRules: true,
    editorProps: {
      attributes: {
        class: 'h-full prose prose-sm sm:prose lg:prose-lg xl:prose-2xl m-5 focus:outline-none',
      },
    },
  });

  return (
    <>
      <h3>Choose a note on the left</h3>
    </>
  );
}
