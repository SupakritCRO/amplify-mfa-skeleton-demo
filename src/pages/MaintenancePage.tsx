import { Dispatch, SetStateAction } from "react";

// MaintenancePage.tsx
interface MaintenanceProps {
  isShowCloseButton: boolean
  setCloseModal?: Dispatch<SetStateAction<boolean>>
  customCss?: string
}

const MaintenancePage = ({ isShowCloseButton, setCloseModal, customCss }: MaintenanceProps) => {
  return (
    <div className={`w-full h-full flex flex-col items-center justify-center bg-gray-100 px-4 ${customCss}`}>
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4 text-gray-800">We'll be back soon!</h1>
        <p className="text-xl mb-6 text-gray-600">
          แจ้งปิดให้บริการชั่วคราวของระบบ Risk Management Intelligence (RMI) ในวันที่ 27 กันยายน 2567 เวลา 20:00 - 23:59 น.
          โดยช่วงเวลาดังกล่าวท่านจะไม่สามารถเข้าระบบ RMI ได้
          ขออภัยในความไม่สะดวกที่เกิดขึ้นมา ณ ที่นี้
        </p>
        <p className="text-lg text-gray-600">— CRO</p>
      </div>
      {isShowCloseButton &&
        <div className="mt-2">
          <button className="w-[200px] text-white text-center" onClick={() => setCloseModal!(false)}>
            Close
          </button>
        </div>
      }
    </div>
  );
};

export default MaintenancePage;
