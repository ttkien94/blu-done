import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
ClassicEditor.create(document.querySelector("#editor"), {
  toolbar: ["ckfinder", "uploadImage"], // Depending on your preference.
  ckfinder: {
    // Feature configuration.
  },
})
  .then()
  .catch();
