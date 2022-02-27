import React from 'react';
import { Editor, EditorContent } from '@tiptap/react';

interface IdeaEditorProps {
  editor: Editor;
}

export default function IdeaEditor({ editor }: IdeaEditorProps) {
  return (
    <div className="border-4 border-solid border-primary p-4 h-full w-full font-sans">
      <EditorContent editor={editor} className="h-full w-full m-auto" />
    </div>
  );
}
