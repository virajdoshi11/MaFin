import SideBar from "@/components/SideBar";
import Image from "next/image";

import MobileNavbar from "@/components/MobileNavbar";

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
  const loggedInUser: User = { $id: '1', userId: '', dwollaCustomerUrl: '', dwollaCustomerId: '', email: 'abc@gmail.com', firstName: 'Viraj', lastName: 'Doshi', address1: '', city: '', state: '', postalCode: '', dateOfBirth: '', ssn: '' }

  return (
    <main className="flex h-screen w-full font-inter">
      <SideBar user={loggedInUser} />

      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image src='/icons/logo.svg' width={30} height={30} alt="logo" />
          <div>
            <MobileNavbar user={loggedInUser} />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}
