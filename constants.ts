import { BlogPost } from './types';

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Hello_World.exe',
    date: '2023-10-24',
    excerpt: 'Initializing the system. Why I chose a static terminal aesthetic for 2024.',
    content: `
      <p class="mb-4">Welcome to <strong>The Digital Levite</strong>.</p>
      <p class="mb-4">In an age of bloat, trackers, and infinite scrolling feeds, I wanted to carve out a quiet corner of the internet. A place that feels like the machines I grew up with—green phosphor, humming fans, and the command line.</p>
      <p class="mb-4">This site is intentionally stripped down. No comments section to moderate. No analytics scripts watching your mouse movements. Just text, code, and a bit of vibe.</p>
      <p>System status: <span class="text-terminal-green font-bold">ONLINE</span>.</p>
    `,
    tags: ['meta', 'intro', 'minimalism']
  },
  {
    id: '2',
    title: 'The_Sacred_and_The_Silicon',
    date: '2023-11-02',
    excerpt: 'Reflections on maintaining spiritual discipline in a hyper-connected digital age.',
    content: `
      <p class="mb-4">The Levites of old were set apart for service, maintaining the sacred spaces. Today, our "sacred spaces" are often digital. Our temples are servers; our rituals are routines.</p>
      <p class="mb-4">How do we maintain purity of thought when the algorithm is designed to pollute it with outrage? The answer isn't total disconnection—it's intentionality.</p>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li>Curate your inputs relentlessly.</li>
        <li>Practice digital sabbaths.</li>
        <li>Remember that you are the user, not the product.</li>
      </ul>
      <p>We must learn to walk through the digital fire without smelling of smoke.</p>
    `,
    tags: ['philosophy', 'theology', 'digital-health']
  },
  {
    id: '3',
    title: 'Stack_Overflow_Architecture',
    date: '2023-12-15',
    excerpt: 'Why copying and pasting code isn\'t engineering, but understanding it is.',
    content: `
      <p class="mb-4">We've all done it. <code class="bg-terminal-dim px-1">Ctrl+C</code>, <code class="bg-terminal-dim px-1">Ctrl+V</code>. But the difference between a "coder" and an "engineer" is what happens in the milliseconds between those keystrokes.</p>
      <p class="mb-4">If you can't explain <em>why</em> the solution works, you haven't solved the problem; you've just deferred the bug to a later date.</p>
      <div class="border border-terminal-green p-4 my-4 bg-terminal-dim bg-opacity-30">
        <p class="font-bold text-sm mb-2">> ERROR_LOG:</p>
        <p class="text-sm">"Understanding is the compression algorithm of knowledge."</p>
      </div>
      <p>Read the documentation. Read the source. Be the engineer.</p>
    `,
    tags: ['coding', 'career', 'advice']
  },
  {
    id: '4',
    title: 'End_of_Line',
    date: '2024-01-05',
    excerpt: 'A short poem about deprecated functions and lost data.',
    content: `
      <p class="mb-4 whitespace-pre-line">
        The cursor blinks, a steady heart,
        In voids where processes depart.
        A memory leaked, a pointer lost,
        We optimize, but at what cost?
      </p>
      <p class="mb-4 whitespace-pre-line">
        The function returns, the stack unwinds,
        Leaving trace logs in our minds.
        Shutting down...
      </p>
    `,
    tags: ['poetry', 'creative']
  }
];

export const SITE_CONFIG = {
  title: 'THE_DIGITAL_LEVITE',
  contactEmail: 'contact@digitallevite.com',
  socials: [
    { name: 'GITHUB', url: '#' },
    { name: 'TWITTER', url: '#' },
    { name: 'RSS', url: '#' }
  ]
};