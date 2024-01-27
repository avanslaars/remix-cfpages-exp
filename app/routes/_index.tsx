import type { MetaFunction } from '@remix-run/cloudflare'

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ]
}

export default function Index() {
  return (
    <div className="px-2">
      <h1 className="text-3xl text-amber-400 font-extrabold tracking-wide">
        Welcome to my Remix Sandbox
      </h1>
      <p className="text-lg">
        I use Remix at work, but need a place to play around where I don&apos;t
        have to follow anyone&apos;s styling, requirements, or CI/CD
        shenanigans. Using Cloudflare pages should make it nice and easy to mess
        around with things and put it out there for easy sharing.
      </p>
    </div>
  )
}
