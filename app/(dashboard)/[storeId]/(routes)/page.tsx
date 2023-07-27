import prismadb from "@/lib/prismadb";
import { FC } from "react";

interface DashboardpageProps {
  params: {
    storeId: string;
  };
}

const Dashboardpage: FC<DashboardpageProps> = async ({ params }) => {
  const store = await prismadb.store.findFirst({
    where: {
      id: params.storeId,
    },
  });

  return <div>Active Store: {store?.name}</div>;
};

export default Dashboardpage;
