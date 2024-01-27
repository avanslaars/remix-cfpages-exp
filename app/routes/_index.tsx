import type { MetaFunction } from '@remix-run/cloudflare'

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ]
}

export default function Index() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.8' }}>
      <h1>Welcome to my Remix Sandbox</h1>
      <p>
        I use Remix at work, but need a place to play around where I don&apos;t
        have to follow anyone&apos;s styling, requirements, or CI/CD
        shenanigans. Using Cloudflare pages should make it nice and easy to mess
        around with things and put it out there for easy sharing.
      </p>
    </div>
  )
}
