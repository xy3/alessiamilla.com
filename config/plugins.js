// plugins.js
module.exports = ({env}) => (
  {
    'preview-button': {
      config: {
        contentTypes: [
          {
            uid: 'api::post.post',
            draft: {
              url: env("URL") + '/post/{Slug}',
            },
            published: {
              url: env("URL") + '/post/{Slug}',
            },
          },
        ],
      },
    },
    tinymce: {
      enabled: true,
      config: {
        editor: {
          outputFormat: "html",
          editorConfig: {
            fullscreen_native: true,
            content_css: "/style.css",
            height: 900,
            menubar: false,
            extended_valid_elements: "span, img, small",
            forced_root_block: "",
            convert_urls: false,
            entity_encoding: "raw",
            plugins:
              "advlist autolink lists link image media charmap preview anchor \
              searchreplace visualblocks code fullscreen emoticons nonbreaking \
              insertdatetime media table code help wordcount fullscreen",
            toolbar:
              "undo redo fullscreen | table styles | bold italic forecolor  | \
              alignleft aligncenter alignright alignjustify | \
              media emoticons code backcolor |\
              nonbreaking bullist numlist outdent indent | removeformat | help",
            style_formats: [
              {
                title: "Headings",
                items: [
                  {title: "h1", block: "h1"},
                  {title: "h2", block: "h2"},
                  {title: "h3", block: "h3"},
                  {title: "h4", block: "h4"},
                  {title: "h5", block: "h5"},
                  {title: "h6", block: "h6"},
                ],
              },

              {
                title: "Text",
                items: [
                  {title: "Paragraph", block: "p"},
                  {
                    title: "Paragraph with small letters",
                    block: "small",
                  },
                ],
              },
            ],
          },
        },
      },
    },
  });

