import React from "react";
import {prefixFileUrlWithBackendUrl, useLibrary} from "@strapi/helper-plugin";
import PropTypes from "prop-types";

const MediaLib = ({isOpen, onChange, onToggle}) => {
  const {components} = useLibrary();
  const MediaLibraryDialog = components["media-library"];

  const handleSelectAssets = (files) => {
    const formattedFiles = files.map((f) => {
      const res = {
        alt: f.alternativeText || f.name,
        url: prefixFileUrlWithBackendUrl(f.url),
        formats: {},
        mime: f.mime,
      }

      for (const fmt in f.formats) {
        res.formats[fmt] = prefixFileUrlWithBackendUrl(f.formats[fmt].url)
      }

      console.log(res)
      return res
    });

    onChange(formattedFiles);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <MediaLibraryDialog
      onClose={onToggle}
      onSelectAssets={handleSelectAssets}
    />
  );
};

MediaLib.defaultProps = {
  isOpen: false,
  onChange: () => {
  },
  onToggle: () => {
  },
};

MediaLib.propTypes = {
  isOpen: PropTypes.bool,
  onChange: PropTypes.func,
  onToggle: PropTypes.func,
};

export default MediaLib;
