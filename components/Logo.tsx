import Icon from "./Icon";

export default function Logo() {
  return (
    <section
      aria-labelledby="logo-title"
      className="w-full space-y-2 text-center"
    >
      <Icon type="logo" size={"8rem"} className="mx-auto" />
      <div>
        <h1
          id="logo-title"
          className="text-5xl font-extrabold tracking-[0.2rem]"
        >
          TRIVDUEL
        </h1>
        <p className="text-lg font-bold tracking-wide">Knowledge In Combat</p>
      </div>
    </section>
  );
}
