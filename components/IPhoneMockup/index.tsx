import Image, { StaticImageData } from 'next/image';
import styles from '../../styles/IPhoneMockup.module.css'

import large_iphone_13 from '../../public/img/device-frames/iphone_hardware_zoomed__flki3nqhzhqq_large_2x.png';

import medium_iphone_13 from '../../public/img/device-frames/iphone_hardware_zoomed__flki3nqhzhqq_medium_2x.png'

import iphone_8_plus from '../../public/img/device-frames/iphone_8_plus.png';
import classnames from 'classnames';

const AVAILABLE_MODELS = {
  // 13: {
  //   large: '/img/device-frames/iphone_hardware_zoomed__flki3nqhzhqq_large_2x.png',
  //   medium: '/img/device-frames/iphone_hardware_zoomed__flki3nqhzhqq_medium_2x.png'
  // }
  13: {
    large: large_iphone_13,
    medium: medium_iphone_13
  },
  8: {
    large: iphone_8_plus,
    medium: iphone_8_plus
  }
}

type IPhoneMockupProps = {
  pic: StaticImageData,
  model: keyof (typeof AVAILABLE_MODELS),
  res: 'large' | 'medium',
  aspectRatio: '19dot5_9' | '16_9',
  renderWidth: number,
  renderHeight?: number,
}

export default function IPhoneMockup(props: IPhoneMockupProps) {
  const { pic, model, res, aspectRatio, renderWidth, renderHeight } = props;

  const frame = AVAILABLE_MODELS[model][res];
  // max-w-[500px]
  return <div className=" relative snap-center drop-shadow-lg" style={{ minWidth: `${renderWidth}px`, maxWidth: `${renderWidth}px`, minHeight: renderHeight }}>
    <Image className={styles['screenshot_' + aspectRatio]} src={pic} alt={''} />
    <a href={pic.src} target='_blank'>
      <Image className={styles['device-frame']} src={frame} alt={''} />
    </a>
  </div>
}

type IPhoneVideoMockupProps = {
  url: string,
  model: keyof (typeof AVAILABLE_MODELS),
  res: 'large' | 'medium',
  aspectRatio: '19dot5_9' | '16_9',
  renderWidth: number,
  renderHeight?: number,
}

export function IPhoneVideoMockup(props: IPhoneVideoMockupProps) {
  const { model, res, aspectRatio, url, renderWidth, renderHeight } = props;

  const frame = AVAILABLE_MODELS[model][res];
  // max-w-[500px]
  return <div className=" relative snap-center drop-shadow-lg" style={{ minWidth: `${renderWidth}px`, maxWidth: `${renderWidth}px`, minHeight: renderHeight }}>

    {/* <Image className={styles['screenshot_' + aspectRatio]} src={pic.src} /> */}
    <video className={styles['screenshot_' + aspectRatio]} src={url} width={renderWidth} autoPlay muted controls loop playsInline />
    {/* <a href={pic.src} target='_blank'> */}
    <Image className={classnames(styles['device-frame'], 'pointer-events-none')} src={frame} alt={''} />
    {/* </a> */}
  </div>
}