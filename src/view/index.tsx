import EmbededView from '@sentre/embeded-view'

import configs from 'configs'

const {
  manifest: { appId },
} = configs

const View = () => {
  return (
    <EmbededView
      appId={appId}
      src={'https://app.everlend.finance/'}
      wallet={window.sentre.solana}
    />
  )
}

export default View
