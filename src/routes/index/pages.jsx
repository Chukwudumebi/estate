import User from "../../pages/user";

function IndexPage() {
  return (
    <div className="h-screen p-4 pt-24 pb-20 md:pb-10">
      <div className="grid h-full grid-rows-auto-1fr gap-6">
          <User/>
      </div>
    </div>
  );
}

export default IndexPage;