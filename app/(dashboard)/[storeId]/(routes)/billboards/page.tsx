import BillboardClient from "@/components/billboard-client";
import { FC } from "react";

interface BillboardProps {}

const BillboardsPage: FC<BillboardProps> = ({}) => {
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <BillboardClient />
      </div>
    </div>
  );
};

export default BillboardsPage;
