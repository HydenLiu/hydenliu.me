import { Index, Show } from 'solid-js'

interface SocialProps {
  data: {
    icon: string
    link: string
    class: string
    text?: string
  }
}

const SocialItem = (props: SocialProps) => {
  const { data } = props
  return (
    <a
      class={`inline-flex px-3 py-2 mt-2 mr-2 rounded-md bg-gray-50 transition-colors decoration-none ${data.class} hover:text-white dark:bg-gray-50/10`}
      href={data.link}
      target="_blank"
    >
      <div text-xl>
        <div class={data.icon} />
      </div>
      <Show
        when={data.text}
      >
        <div text-sm ml-1>{ data.text }</div>
      </Show>
    </a>
  )
}

export default () => {
  const socialLists = [
    {
      text: '',
      link: 'https://github.com/HydenLiu',
      icon: 'i-ri-github-fill',
      class: 'hover:bg-gray-700 dark:hover:bg-white dark:hover:text-gray-900'
    }, {
      text: '',
      link: 'https://twitter.com/hyden_liu',
      icon: 'i-fa-brands-twitter',
      class: 'hover:bg-[#00ACEE]'
    }, {
      text: '',
      link: 'mailto:hyden518@gmail.com',
      icon: 'i-ri-mail-fill',
      class: 'hover:bg-gradient-to-r from-[#fd5949] to-[#d6249f]'
    }
  ]

  return (
    <div mt-4>
      <Index each={socialLists}>
        {item => (
          <SocialItem data={item()} />
        )}
      </Index>
    </div>
  )
}
