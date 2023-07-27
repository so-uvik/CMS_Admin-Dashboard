import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import prismadb from "@/lib/prismadb";

interface DashboardlayoutProps {
  children: React.ReactNode;
  params: {
    storeId: string;
  };
}

const Dashboardlayout = async ({ children, params }: DashboardlayoutProps) => {
  const { userId } = auth();
  if (!userId) {
    redirect("/sign-in");
  }
  const store = await prismadb.store.findFirst({
    where: {
      id: params.storeId,
      userId, //which means userId: userId, this is a shorthand
    },
  });

  if (!store) {
    redirect("/");
  }
  return (
    <>
      <div>This will be a Navbar</div>
      {children}
    </>
  );
};

export default Dashboardlayout;

//1:48:59
