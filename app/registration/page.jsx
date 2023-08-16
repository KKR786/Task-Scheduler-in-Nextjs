import RegistrationComponent from "@/components/form/registration"
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/public/assets/logo.png'

function Registration() {
  return (
    <section className="gradient-form h-full bg-neutral-200">
      <div className="lg:h-[100vh] p-10">
        <div className="flex h-full flex-wrap items-center justify-center text-neutral-800">
          <div className="w-full">
            <div className="block rounded-lg bg-white shadow-lg">
              <div className="lg:flex lg:flex-wrap">
              <div
                  className="flex items-center rounded-t-lg lg:rounded-tr-none lg:w-6/12 lg:rounded-bl-lg lg:rounded-br-none"
                  style={{'background-color': 'maroon'}}
                >
                  <div className="px-4 py-6 m-auto text-white md:p-12">
                    <h4 className="mb-6 text-xl text-center font-semibold">
                      Task Scheduler
                    </h4>
                    <p className="text-sm">
                        Effortlessly manage your tasks with our intuitive software task scheduler. Seamlessly add and organize your to-do list, ensuring a structured approach to your daily workflow. Stay on top of your tasks and accomplish more with efficient task management
                    </p>
                  </div>
                </div>
                <div className="px-4 md:px-0 lg:w-6/12">
                  <div className="md:mx-6 md:p-12">
                    <div className="text-center">
                      <Image
                        className="mx-auto"
                        src={logo}
                        alt="logo"
                        width={140}
                        height={140}
                      />
                      <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
                        Flow fuels work, work shapes time
                      </h4>
                    </div>
                    <RegistrationComponent />
                    <div className="flex items-center justify-between pb-6 mt-12">
                        <p className="mb-0 mr-2">Already have an account?</p>
                        <Link
                          type="button"
                          href='/login'
                          className="inline-block rounded border-2 border-red-500 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-red-500 transition duration-150 ease-in-out hover:border-red-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-red-600 focus:border-red-600 focus:text-red-600 focus:outline-none focus:ring-0 active:border-red-700 active:text-red-700"
                        >
                          Log In
                        </Link>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Registration
