import React from 'react';
import styled from 'styled-components/macro';

const withSuffix = (string, suffix) => {
  return string.replace(".jpg", suffix)
}

const PhotoGridItem = ({ id, src, alt, tags }) => {
  return (
    <article>
      <Anchor href={`/photos/${id}`}>
        <picture>
          <source type='image/avif' srcSet={`
            ${withSuffix(src, ".avif")} 1x,
            ${withSuffix(src, "@2x.avif")} 2x,
            ${withSuffix(src, "@3x.avif")} 3x`}
          />
          <source type='image/jpeg' srcSet={`
            ${src} 1x, 
            ${withSuffix(src, "@2x.jpg")} 2x, 
            ${withSuffix(src, "@3x.jpg")} 3x`}
          />
          <Image src={src} alt={alt}/>
        </picture>
      </Anchor>
      <Tags>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>
    </article>
  );
};

const Anchor = styled.a`
  text-decoration: none;
  color: inherit;
  outline-offset: 4px;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: 300px;
  border-radius: 2px;
  margin-bottom: 8px;
  object-fit: cover;
`;

const Tags = styled.ul`
  padding: 4px 0px;
  min-height: fit-content;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

const Tag = styled.li`
  display: inline;
  &:not(:last-of-type) {
    margin-right: 8px;
  }
  padding: 4px 8px;
  background: var(--color-gray-300);
  font-size: 0.875rem;
  font-weight: 475;
  color: var(--color-gray-800);
`;

export default PhotoGridItem;
