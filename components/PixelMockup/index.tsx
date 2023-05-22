import classnames from 'classnames';
import styles from '../../styles/PixelMockup.module.css'

import pixel_4 from '../../public/img/device-frames/google-pixel4-clearlywhite-portrait.png';
import pixel_1 from '../../public/img/device-frames/pixel_1.png';

const AVAILABLE_MODELS = {
  // 13: {
  //   large: '/img/device-frames/iphone_hardware_zoomed__flki3nqhzhqq_large_2x.png',
  //   medium: '/img/device-frames/iphone_hardware_zoomed__flki3nqhzhqq_medium_2x.png'
  // }
  4: {
    medium: pixel_4
  },
  1: {
    medium: pixel_1
  }
}

type Pixel4MockupProps = {
  res: 'medium',
  pic: StaticImageData,
  model: keyof (typeof AVAILABLE_MODELS),
  aspectRatio: '19_9' | '19_9_exact' | '16_9',
  renderWidth: number,
  renderHeight?: number,
}

export function PixelMockup(props: Pixel4MockupProps) {
  const { model, res, aspectRatio, pic, renderWidth, renderHeight } = props;

  const frame = AVAILABLE_MODELS[model][res];

  return <div className="max-w-[500px] relative snap-center drop-shadow-lg" style={{ minWidth: `${renderWidth}px`, minHeight: renderHeight }}>
    <img className={styles['screenshot_' + aspectRatio]} src={pic.src} />
    <a href={pic.src} target='_blank'>
      <img className={styles['device-frame']} src={frame.src} />
    </a>
  </div>
}


type Pixel4VideoMockupProps = {
  url: string,
  aspectRatio: '19_9_exact',
  renderWidth: number,
}


export function Pixel4VideoMockup(props: Pixel4VideoMockupProps) {
  const { aspectRatio, url, renderWidth } = props;

  const frame = pixel_4;

  return <div className="max-w-[500px] relative snap-center drop-shadow-lg" style={{ minWidth: `${renderWidth}px`, maxWidth: `${renderWidth}px` }}>



    {/* <img className={styles['screenshot_' + aspectRatio]} src={pic.src} /> */}
    <video className={styles['screenshot_' + aspectRatio]} src={url} width={renderWidth} autoPlay muted controls loop playsInline />
    {/* <a href={pic.src} target='_blank'> */}
    <img className={classnames(styles['device-frame'], 'pointer-events-none')} src={frame.src} />
    {/* </a> */}
  </div>
}