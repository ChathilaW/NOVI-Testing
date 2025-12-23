import { SignIn } from "@clerk/nextjs"
import { neobrutalism } from "@clerk/themes"
import Image from "next/image"

const LoginPage = () => {
    return(
        <main className="min-h-screen flex flex-col items-center justify-center 
            bg-[#BA08E6] p-5 gap-10 animate-fade-in">

            <section className="flex flex-col items-center">
                        <Image
                            src='/assets/Novi_logo-NoBackground.png'
                            width={100}
                            height={100}
                            alt="Logo"
                            />
                            <h1 className="text-lg font-extrabold lg:text-2xl">
                            Connect, Communicate, Collaborate in Real-Time
                            </h1>
                     
            </section>

            
            <SignIn
                appearance={{
                    baseTheme: neobrutalism,
                    variables: {
                        colorPrimary: "#E88AFF",     // buttons / accents
                        colorBackground: "#F0B0FF",  // light purple card
                        colorText: "#2e1065",        // dark purple text
                        colorInputBackground: "#f5f3ff",
                        colorInputText: "#2e1065",
                        borderRadius: "0.75rem",
                    },
                    elements: {
                    card: "shadow-xl border border-purple-300",
                    headerTitle: "text-purple-900",
                    headerSubtitle: "text-purple-700",
                    formButtonPrimary: "bg-purple-600 hover:bg-purple-700",
                    },
                }}
            />
            
            
        </main>
    )
}

export default LoginPage