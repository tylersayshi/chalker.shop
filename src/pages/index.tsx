import { Link } from "waku";

export default async function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <title>chalker.shop</title>
      <h1 className="text-4xl font-bold tracking-tight">chalker.shop</h1>
      <p>
        hi! this is my laptop as a chalkboard. join the newsletter if you'd like
        to follow along and buy one soon!
      </p>
      <form
        action="https://buttondown.com/api/emails/embed-subscribe/tylur.dev"
        method="post"
        target="popupwindow"
        onsubmit="window.open('https://buttondown.com/tylur.dev', 'popupwindow')"
        class="flex flex-col items-center gap-2"
      >
        <label for="bd-email">Enter your email</label>
        <input
          type="email"
          name="email"
          id="bd-email"
          className="rounded-md border-2 border-black p-1 w-full"
        />

        <input
          type="submit"
          value="Subscribe"
          className="rounded-md border-2 border-black p-1 w-full cursor-pointer"
        />
      </form>
    </div>
  );
}
