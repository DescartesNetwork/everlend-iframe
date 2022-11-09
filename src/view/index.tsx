import EmbededView from '@sentre/embeded-view'
import { net } from '@sentre/senhub'

import MainnetOnly from './mainetOnly'

import configs from 'configs'

const {
  manifest: { appId },
} = configs

const View = () => {
  if (net !== 'mainnet') return <MainnetOnly />
  return (
    <EmbededView
      appId={appId}
      src={'https://app.everlend.finance/'}
      wallet={window.sentre.solana}
    />
  )
}

export default View
