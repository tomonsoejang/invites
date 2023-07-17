'use client';
import { PhotoAlbum, RenderPhotoProps } from 'react-photo-album';
import { galleryImages } from './data/images';
import React from 'react';

export default function Gallery() {
  const [spacing, setSpacing] = React.useState(0);
  const [padding, setPadding] = React.useState(10);

  const renderPhoto = React.useCallback(
    ({ imageProps: { alt, style, ...rest } }: RenderPhotoProps) => (
      <img
        alt={alt}
        style={{
          ...style,
          borderRadius: padding > 2 ? '4px' : 0,
          background: 'white',
          boxShadow:
            spacing > 0
              ? '0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%)'
              : 'none',
          transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        }}
        {...rest}
      />
    ),
    [spacing, padding]
  );

  return (
    <div
      style={{
        width: '80%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <PhotoAlbum
        layout="rows"
        photos={galleryImages}
        padding={padding}
        columns={2}
        spacing={20}
        targetRowHeight={250}
        renderPhoto={renderPhoto}
      />
    </div>
  );
}
