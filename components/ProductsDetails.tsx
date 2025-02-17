import { Fragment } from "react";
import Image from "next/image";

import { Dialog, Transition } from "@headlessui/react";
import { AllProductsType } from "@types";
import { FaAt, FaPhone, FaPhoneAlt } from "react-icons/fa";
// import { generateCarImageUrl } from "@utils";

interface ItemDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  product: AllProductsType;
}

const ProductDetails = ({ isOpen, closeModal, product }: ItemDetailsProps) => (
  <>
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as='div' className='relative z-10' onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-black bg-opacity-25' />
        </Transition.Child>

        <div className='fixed inset-0 overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center p-4 text-center'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-out duration-300'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <Dialog.Panel className='relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white p-6 text-left shadow-xl transition-all flex flex-col gap-5'>
                <button
                  type='button'
                  className='absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full'
                  onClick={closeModal}
                >
                  <Image
                    src='/close.svg'
                    alt='close'
                    width={20}
                    height={20}
                    className='object-contain'
                  />
                </button>

                <div className='flex-1 flex flex-col gap-3'>
                  <div className='relative w-full h-48 bg-gray-200 bg-cover bg-center rounded-lg '>
                    <Image src={product.image} alt='product model' fill priority className='object-contain' />
                  </div>

        
                </div>

                <div className='flex-1 flex flex-col gap-2'>
                  <h2 className='font-semibold text-xl capitalize'>
                    {product.manufacturer} {product.model}
                  </h2>
                  
                  <div className='mt-3 flex flex-wrap gap-4'>
 
                    {Object.entries(product).map(([key, value]) => {
                      if(key === 'image') return;
                      
                      return (
                        <div className='flex justify-between gap-5 w-full text-right' key={key}>
                          <h4 className='text-grey capitalize'>
                            {key.split("_").join(" ")}  
                          </h4>
                          <p className='text-black-100 font-semibold'>
                            {value}
                          </p>
                        </div>
                      )
                    })}

                  </div>
                </div>
                <div className="w-full h-20 bg-gray-400 rounded-md grid grid-cols-2 items-center p-4">
                    <div>
                      <div className="flex items-center gap-4 ">
                        <FaPhoneAlt className=""/>
                        <h1>0248169258</h1>
                      </div>
                    </div>
                    <div>
                    <div className="flex items-center gap-4">
                        <FaAt className=""/>
                        <h1>info@usulas.com</h1>
                      </div>
                    </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  </>
);

export default ProductDetails;
