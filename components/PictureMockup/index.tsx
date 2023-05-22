type PictureMockupProps = {
  // res: 'large' | 'medium',
  pic: StaticImageData,
  // aspectRatio: '19_9' | '19_9_exact',
  renderWidth: number,
}

export function PictureMockup(props: PictureMockupProps) {
  const { pic, renderWidth } = props;

  return <a href={pic.src} target="_blank">
    <img className="rounded-md snap-center drop-shadow-lg" style={{ minWidth: `${renderWidth}px`, maxWidth: `${renderWidth}px` }} src={pic.src} />
  </a>
}
