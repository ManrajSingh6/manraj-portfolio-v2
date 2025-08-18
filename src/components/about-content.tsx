import type { JSX } from "react";

export function AboutContent(): JSX.Element {
  return (
    <div className="flex flex-col gap-8 text-primary-text">
      <p className="font-semibold text-lg">Hi there 👋</p>
      <h1 className="text-4xl font-bold">Manraj Singh - Software Engineer</h1>
      <p className="font-thin leading-7">
        I'm a team player with a positive attitude, and enjoy using my critical
        thinking skills to learn and solve problems. I enjoy full-stack
        development, and have a goal as a developer to leverage technology to
        create a lasting impact on users.
      </p>
      <button className="bg-aqua p-4 text-app-bg w-fit rounded-sm cursor-pointer">
        View My Resume
      </button>
    </div>
  );
}
