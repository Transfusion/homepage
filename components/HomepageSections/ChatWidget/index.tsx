import { useRef } from "react";
import BlurbSubtitle from "../../BlurbSubtitle";
import BlurbTitle from "../../BlurbTitle";
import KeywordPillbox from "../../KeywordPillbox";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { PictureMockup } from "../../PictureMockup";

import livechat_agent from '../../../public/img/static/livechat/livechat-agent.jpg';
import livechat_widget from '../../../public/img/static/livechat/livechat_widget.jpg';

export default function ChatWidget(props: React.ComponentPropsWithoutRef<"div">) {

  const scrollable = useRef<HTMLDivElement | null>(null);

  return <div {...props} className="break-after-avoid">

    <div className="flex flex-row">
      <div className="inline-block grow">
        <BlurbTitle>Live Chat Platform</BlurbTitle>
      </div>
      <div>
        <div className="inline-block text-xs whitespace-nowrap border px-2 py-1 rounded text-slate-500 border-slate-500 dark:text-slate-300 dark:border-slate-300">
          Proof of concept
        </div>
      </div>
    </div>
    <BlurbSubtitle>Minimum viable prototype of a customer support live chat platform with an embeddable widget</BlurbSubtitle>

    <div className="relative">
      <div ref={scrollable}
        className={"p-5 flex flex-row space-x-5 overflow-x-auto lg:snap-x"}>
        <PictureMockup pic={livechat_agent} renderWidth={500} />
        <PictureMockup pic={livechat_widget} renderWidth={300} />
      </div>

      <BsArrowLeftCircleFill onClick={() => {
        scrollable.current?.scrollBy({ left: -400, behavior: 'smooth' });
      }} size={40} className="absolute top-1/2 left-2 cursor-pointer opacity-75 fill-slate-400 hover:fill-slate-600" />

      <BsArrowRightCircleFill onClick={() => {
        scrollable.current?.scrollBy({ left: +400, behavior: 'smooth' });
      }} size={40} className="absolute top-1/2 right-2 cursor-pointer opacity-75 fill-slate-400 hover:fill-slate-600" />
    </div>


    <KeywordPillbox keywords={['Spring Boot', 'Spring Integration', 'AMQP', 'RabbitMQ', 'WebSocket', 'STOMP', 'React', 'Redux', 'i18n',]} />

    <article className="prose dark:prose-invert max-w-none leading-normal">
      <p>The client requested a self-hosted, multitenant platform with automatic agent assignment, logging and replay of chat history, and i18n support.</p>

      <p>Designed an architecture composed of a "gateway" service communicating with the frontend over <strong>WebSocket</strong>, a service binding incoming new conversations to a <code>TopicExchange</code>, a service assigning agents to said conversations, and a service logging and replaying conversation history, as part of a team.</p>

      <p>Used <strong>Spring Cloud Config</strong> to externalize the configuration and RabbitMQ with the <strong>STOMP</strong> plugin enabled was used as the message broker in conjunction with <code>spring-boot-starter-websocket</code>. Used <strong>Spring Integration</strong> to implement event-driven messaging, including patterns such as request-reply with <code>MessagingGateway</code> and publish/subscribe.</p>

      <p><code>spring-cloud-bus</code>, also backed by AMQP / RabbitMQ, was used for inter-service communication, which allowed the abstractions provided by <strong>Spring Events</strong> to be used seamlessly.</p>

      <p>Developed the frontend in React with Redux with FormatJS for i18n, using Direflow to package the embeddable widget as a <strong>WebComponent</strong>.</p>

      <p>The client took over further development after the MVP was demonstrated.</p>
    </article>
  </div>
}