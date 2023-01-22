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
    'drag-drop-content-types': {
      enabled: true
    },
    'tinymce': {
      enabled: true,
      resolve: './src/plugins/tinymce',
      config: {
        editor: {
          outputFormat: "html",
          editorConfig: {
            fullscreen_native: true,
            content_css: "/style.css",
            language: "en",
            height: 500,
            remove_linebreaks: true,
            force_br_newlines: false,
            remove_trailing_brs: true,
            cleanup: true,
            convert_newlines_to_brs: false,
            invalid_elements: "span",
            menubar: false,
            // extended_valid_elements: "img, small, video[src|muted|autoplay=true|loop]",
            forced_root_block: "",
            convert_urls: false,
            entity_encoding: "raw",
            media_filter_html: false,
            plugins:
              "advlist autolink lists link image charmap preview anchor \
              searchreplace code fullscreen table emoticons \
              insertdatetime media table code help wordcount",
            toolbar:
              "undo redo fullscreen | styles | bold italic forecolor | \
              alignleft aligncenter alignright alignjustify | \
              table emoticons media |\
              bullist numlist outdent indent | removeformat | help",
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

