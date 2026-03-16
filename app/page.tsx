import Image from "next/image";

export default function ShuziZhouWebsite() {
  const researchAreas = [
    {
      title: "Generative Modeling",
      description:
        "Real-time generative model predictive control, efficient inference, and practical ML systems.",
    },
    {
      title: "Robust Machine Learning",
      description:
        "Out-of-distribution generalization, robustness-efficiency trade-offs, and evaluation under distribution shift.",
    },
    {
      title: "Representation & Ensembling",
      description:
        "Embedding-space ensembles, model composition, scalable benchmarking, and reliable experimentation.",
    },
  ];

  const publications = [
    {
      title:
        "Implicit Maximum Likelihood Estimation for Real-time Generative Model Predictive Control",
      authors: "Grayson Lee, Minh Bui, Shuzi Zhou, Yankai Li, Mo Chen, Ke Li",
      status: "Accepted to ICRA 2026",
      description:
        "A research project on efficient generative modeling for real-time control, with system design and evaluation across performance, stability, and inference efficiency.",
    },
    {
      title:
        "How Much Robustness Does O(1) Inference Cost: Embedding-Space Ensembles vs Weight-Space Ensembles in OOD Generalization",
      authors: "Shuman Peng, Shuzi Zhou, Sharan Vaswani, Martin Ester",
      status: "In Preparation",
      description:
        "An ongoing study of robustness-efficiency trade-offs in OOD generalization, comparing embedding-space ensembles, weight-space methods, and scalable evaluation pipelines.",
    },
  ];

  return (
    <div className="min-h-screen bg-[linear-gradient(to_bottom,_#fff8fb,_#f8fafc_18%,_#f8fafc)] text-slate-900">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-[-80px] top-[-40px] h-64 w-64 rounded-full bg-pink-200/40 blur-3xl" />
          <div className="absolute right-[-60px] top-[80px] h-72 w-72 rounded-full bg-rose-100/60 blur-3xl" />
          <div className="absolute bottom-[-80px] left-1/3 h-64 w-64 rounded-full bg-sky-100/70 blur-3xl" />
        </div>

        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 lg:px-12 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/80 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Simon Fraser University · Research Assistant
              </div>

              <h1 className="text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
                Shuzi Zhou
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700 sm:text-xl">
                Third-year Computing Science student at Simon Fraser University
                with research interests in generative modeling, robust machine
                learning, and out-of-distribution generalization.
              </p>

              <p className="mt-5 max-w-2xl leading-8 text-slate-600">
                I build reliable and efficient machine learning systems, with a
                focus on reproducible experimentation, scalable evaluation, and
                translating research ideas into practical ML pipelines.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#publications"
                  className="rounded-full bg-slate-950 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-slate-900/10 transition hover:-translate-y-0.5"
                >
                  View Publications
                </a>
                <a
                  href="#research"
                  className="rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-medium text-slate-800 shadow-sm transition hover:-translate-y-0.5"
                >
                  Research Interests
                </a>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <a
                  href="mailto:shuzizhou7@gmail.com"
                  className="rounded-2xl border border-white/80 bg-white/80 p-4 shadow-sm backdrop-blur transition hover:-translate-y-0.5"
                >
                  <p className="text-sm text-slate-500">Email</p>
                  <p className="mt-2 break-all text-sm font-semibold text-slate-900">
                    shuzizhou7@gmail.com
                  </p>
                </a>
                <a
                  href="https://github.com/Victoriazhou7"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-white/80 bg-white/80 p-4 shadow-sm backdrop-blur transition hover:-translate-y-0.5"
                >
                  <p className="text-sm text-slate-500">GitHub</p>
                  <p className="mt-2 text-sm font-semibold text-slate-900">
                    Victoriazhou7
                  </p>
                </a>
                <a
                  href="https://www.linkedin.com/in/victoria-z-a77131263"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-white/80 bg-white/80 p-4 shadow-sm backdrop-blur transition hover:-translate-y-0.5"
                >
                  <p className="text-sm text-slate-500">LinkedIn</p>
                  <p className="mt-2 text-sm font-semibold text-slate-900">
                    victoria-z-a77131263
                  </p>
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-pink-200/40 via-white to-sky-100/50 blur-2xl" />
              <div className="relative rounded-[2rem] border border-white/80 bg-white/85 p-4 shadow-2xl shadow-slate-900/8 backdrop-blur">
                <div className="mb-6 flex items-center justify-between px-3 pt-3">
                  <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-slate-600 shadow-sm">
                    Academic Profile
                  </span>
                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
                    Active Research
                  </span>
                </div>

                <div className="overflow-hidden rounded-[1.5rem]">
                  <Image
                    src="/victoria.jpg"
                    alt="Shuzi Zhou"
                    width={900}
                    height={1200}
                    className="h-auto w-full object-cover"
                    priority
                  />
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl bg-slate-50 p-4">
                    <p className="text-sm text-slate-500">Role</p>
                    <p className="mt-1 font-semibold text-slate-900">
                      Research Assistant
                    </p>
                  </div>
                  <div className="rounded-2xl bg-slate-50 p-4">
                    <p className="text-sm text-slate-500">Program</p>
                    <p className="mt-1 font-semibold text-slate-900">
                      Computing Science
                    </p>
                  </div>
                  <div className="rounded-2xl bg-slate-50 p-4">
                    <p className="text-sm text-slate-500">University</p>
                    <p className="mt-1 font-semibold text-slate-900">
                      Simon Fraser University
                    </p>
                  </div>
                  <div className="rounded-2xl bg-slate-50 p-4">
                    <p className="text-sm text-slate-500">Status</p>
                    <p className="mt-1 font-semibold text-slate-900">
                      ICRA 2026 Accepted Paper
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="research"
        className="mx-auto max-w-6xl px-6 py-4 md:px-10 lg:px-12"
      >
        <div className="mb-8">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
            Research Interests
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Areas I am currently exploring
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {researchAreas.map((area) => (
            <div
              key={area.title}
              className="rounded-[1.75rem] border border-slate-200/70 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <p className="text-lg font-semibold text-slate-900">
                {area.title}
              </p>
              <p className="mt-3 leading-7 text-slate-600">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="publications"
        className="mx-auto max-w-6xl px-6 py-16 md:px-10 lg:px-12"
      >
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
              Publications
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Research & Ongoing Work
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-slate-500">
            My current work focuses on efficient generative modeling and robust
            machine learning under distribution shift.
          </p>
        </div>

        <div className="space-y-6">
          {publications.map((paper) => (
            <article
              key={paper.title}
              className="rounded-[2rem] border border-slate-200/70 bg-white p-8 shadow-sm"
            >
              <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                <div className="max-w-3xl">
                  <h3 className="text-2xl font-semibold leading-tight text-slate-950">
                    {paper.title}
                  </h3>
                  <p className="mt-3 text-base text-slate-600">
                    {paper.authors}
                  </p>
                  <p className="mt-5 leading-8 text-slate-700">
                    {paper.description}
                  </p>
                </div>
                <div>
                  <span className="inline-flex rounded-full bg-slate-950 px-4 py-2 text-sm font-medium text-white">
                    {paper.status}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 md:px-10 lg:px-12">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] bg-slate-950 px-8 py-10 text-white shadow-xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-400">
              Current Status
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              Research trajectory
            </h2>
            <p className="mt-5 max-w-2xl leading-8 text-slate-300">
              I am currently a Research Assistant at Simon Fraser University.
              My first paper has been accepted to ICRA 2026, and my second
              paper is currently in preparation.
            </p>
          </div>

          <div className="rounded-[2rem] border border-slate-200/70 bg-white p-8 shadow-sm">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
              Contact
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
              Get in touch
            </h2>
            <div className="mt-6 space-y-4 text-slate-700">
              <a
                href="mailto:shuzizhou7@gmail.com"
                className="block rounded-2xl bg-slate-50 p-4 transition hover:bg-slate-100"
              >
                <p className="text-sm text-slate-500">Email</p>
                <p className="mt-1 font-medium text-slate-900">
                  shuzizhou7@gmail.com
                </p>
              </a>
              <a
                href="https://github.com/Victoriazhou7"
                target="_blank"
                rel="noreferrer"
                className="block rounded-2xl bg-slate-50 p-4 transition hover:bg-slate-100"
              >
                <p className="text-sm text-slate-500">GitHub</p>
                <p className="mt-1 font-medium text-slate-900">
                  github.com/Victoriazhou7
                </p>
              </a>
              <a
                href="https://www.linkedin.com/in/victoria-z-a77131263"
                target="_blank"
                rel="noreferrer"
                className="block rounded-2xl bg-slate-50 p-4 transition hover:bg-slate-100"
              >
                <p className="text-sm text-slate-500">LinkedIn</p>
                <p className="mt-1 font-medium text-slate-900">
                  linkedin.com/in/victoria-z-a77131263
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}