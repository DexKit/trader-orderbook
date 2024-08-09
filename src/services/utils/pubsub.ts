import { GCP_PROJECT_ID } from "../../default-config"

// Message interface on the PubSub nodejs client
export interface PubSubMessage {
  // message.id = ID of the message.
  id: string
  // message.data = Contents of the message.
  data: string
  // message.attributes = Attributes of the message.
  attributes: any
  // Ack the message:
  ack: () => Promise<void>
  // Nack: This doesn't ack the message, but allows more messages to be retrieved
  // if your limit was hit or if you don't want to ack the message.
  nack: () => void
  // message.publishTime = Date when Pub/Sub received the message.
  publishTime: string
  // message.ackId = ID used to acknowledge the message receival.
}

const PUBSUB_TOPICS = {
  BlockNumberUpdate: `projects/${GCP_PROJECT_ID}/topics/api.block-number`,
  ValidateOrderStatus: `projects/${GCP_PROJECT_ID}/topics/api.order.validate-status`,
  NftMetadataUpdateRequest: `projects/${GCP_PROJECT_ID}/topics/api.nft-metadata-request`,
  NftOpenSeaCollectionScrape: `projects/${GCP_PROJECT_ID}/topics/api.nft.opensea.scrape.collection-by-address`,
}

const PUBSUB_SUBSCRIPTIONS = {
  ProcessExchangeOrderUpdatesByBlockNumber: `projects/${GCP_PROJECT_ID}/subscriptions/api.order-status.by-block-number.sub`,
  SaveNewBlockToTable: `projects/${GCP_PROJECT_ID}/subscriptions/api.block-table.sub`,
  NftMetadataUpdateHandlerSub: `projects/${GCP_PROJECT_ID}/subscriptions/api.nft-metadata-request.sub`,
  NftOpenSeaCollectionScrape: `projects/${GCP_PROJECT_ID}/subscriptions/api.nft.opensea.scrape.collection-by-address.sub`,
}

export { PUBSUB_TOPICS, PUBSUB_SUBSCRIPTIONS }
