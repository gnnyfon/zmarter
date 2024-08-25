import Image from "next/image"
import Link from "next/link"

type authProps = {
    title: string,
}

function AuthModule({title}: authProps) {
    return <>
      <div className="flex content-center bg-secondary h-screen">
        <div className="pt-48 pl-24">
            <div>
                <Image src="/images/logo-auth-zmart.png" alt="Logo Zmart" width={398} height={156} />
            </div>
            <div>
                <p className="font-light text-textBllack text-2xl">Let’s start your new journey
                in supporting zero waste campaign!</p>
            </div>
        </div>
        <div className="gradient-auth rounded-r-lg shadow-right-x h-4/5 mt-16 pt-12 w-2/5">
            <div>
                <h1 className="text-textBlack font-regular text-4xl items-center text-center">
                    {title}
                </h1>
            </div>
            <div>
                <div className="ml-24 mt-6">
                    <div>
                        <h2 className="font-light text-lg">Email</h2>
                    </div>
                    <div className="outline rounded-lg bg-garlic outline-1 p-2 max-w-96 pl-3">
                        <input
                            type="text"
                            placeholder="example@gmail.com"
                        />
                    </div>
                </div>  
                <div className="ml-24 mt-6">
                    <div>
                        <h2 className="font-light text-lg">Password</h2>
                    </div>
                    <div className="outline rounded-lg bg-garlic outline-1 p-2 max-w-96 pl-3">
                        <input
                            type="text"
                            placeholder="Enter your password.."
                        />
                    </div>
                </div>  
            </div>
            <div className=" mt-4">
            <button className='ml-56 w-32 h-7 gradient-leaf-button text-garlic font-medium text-lg rounded-md mt-6 mb-6 shadow-lg shadow-matcha/50 hover:text-spinach hover:font-bold hover:outline hover:outline-spinach hover:outline-3'>
              <Link href="/" legacyBehavior><a>Login</a></Link>
            </button>
            <p className="text-center">or</p>
            <button className='ml-44 w-56 h-9 bg-garlic text-textBlack font-regular text-base rounded-md mt-6 mb-6 shadow hover:text-spinach hover:font-bold hover:outline hover:outline-spinach hover:outline-3 content-center'>
              <Link href="/" legacyBehavior>
              <div className="flex h-fit justify-center">
                <div className="h-fit justify-center pr-2">
                <Image src="/images/logo-auth-google.png" alt="Logo Google" width={24} height={24} />
                </div>
                <a className="text-textBlack">Login with Google</a></div>
                
                </Link>
            </button>
            </div>
        </div>
      </div>
    </>
  }

export { AuthModule }