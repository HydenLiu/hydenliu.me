import Socials from './Socials'

export default () => {
  
  return (
    <header class="mt-12 md:mt-18">
      <h1 class="title text-5xl font-bold">
        <span class="block">Hello, </span>
        <span class="block mt-2">I'm Hyden Liu.</span>
      </h1>
      <div class="mt-6">
        <div>
          <span>Front-end developer / Amateur Open Source Enthusiast.</span>
        </div>
        <div mt-2>
          <span>Hope to improve a little bit every day</span>
        </div>
        <div mt-2>
          <span>Love open source and the open source community</span>
        </div>
      </div>
      <Socials />
    </header>
  )
}
