import { BlogPost } from './types';

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Hello_World.txt',
    date: '2025-12-03',
    excerpt: 'Initializing the system. Why I chose a static text aesthetic for 2025.',
    content: `
      <p class="mb-4">Welcome to <strong>The Digital Levite</strong>.</p>
      <p class="mb-4">In an age of bloat, trackers, and infinite scrolling feeds, I wanted to carve out a quiet corner of the internet. A place that feels like the medium I respect most—ink on paper, clear thought, and no distractions.</p>
      <p class="mb-4">This site is intentionally stripped down. No comments section to moderate. No analytics scripts watching your mouse movements. Just text, code, and a bit of vibe.</p>
      <p>Status: <span class="font-bold border-b border-ink">ONLINE</span>.</p>
    `,
    tags: ['meta', 'intro', 'minimalism']
  },
  {
    id: '2',
    title: 'The Sacred and The Silicon',
    date: '2025-12-03',
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
    title: 'Stack Overflow Architecture',
    date: '2025-12-03',
    excerpt: 'Why copying and pasting code isn\'t engineering, but understanding it is.',
    content: `
      <p class="mb-4">We've all done it. <code class="bg-gray-200 px-1 rounded">Ctrl+C</code>, <code class="bg-gray-200 px-1 rounded">Ctrl+V</code>. But the difference between a "coder" and an "engineer" is what happens in the milliseconds between those keystrokes.</p>
      <p class="mb-4">If you can't explain <em>why</em> the solution works, you haven't solved the problem; you've just deferred the bug to a later date.</p>
      <div class="border-l-4 border-ink pl-4 py-2 my-4 italic text-ink-light">
        <p class="text-sm">"Understanding is the compression algorithm of knowledge."</p>
      </div>
      <p>Read the documentation. Read the source. Be the engineer.</p>
    `,
    tags: ['coding', 'career', 'advice']
  },
  {
    id: '4',
    title: 'End of Line',
    date: '2025-12-03',
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
  title: 'The Digital Levite',
  contactEmail: 'contact@digitallevite.com',
  socials: [
    { name: 'Github', url: '#' },
    { name: 'Twitter', url: '#' },
    { name: 'RSS', url: '#' }
  ]
};
