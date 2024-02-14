import { Button, FormLabel, Input, Textarea } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

const Form = ({type, post, setpost, submittimg, handlesubmit}) => {
  return (
    <section className='w-full max-w-full flex-start flex-col'>
        <h1 className='head_text text-left'><span className='blue_gradient'>{type} Post</span></h1>
        <p className='desc text-left max-w-md'>
            {type} and share amazing prompts with the world, and let your imagination run wild with any AI-powered platform.
        </p>

        <form onSubmit={handlesubmit} className='mt-10 w-full max-w-2xl flex flex-col glassmorphism'>
        <FormLabel>
            <span className='font-satoshi font-semibold text-base text-gray-700'>Your AI prompt</span>
            <Textarea value={post.prompt} onChange={(e) => setpost({ ...post, prompt: e.target.value})} placeholder='Write your prompt here...' required className='form_textarea' />
        </FormLabel>

        <FormLabel>
            <span className='font-satoshi font-semibold text-base text-gray-700'>Tag {' '} <span className='font-normal'>(#product, #webdevelopment,#idea)</span></span>
            <Input value={post.tag} onChange={(e) => setpost({ ...post, tag: e.target.value})} placeholder='#tag...' required className='form_input' />
        </FormLabel>

        <div className='flex-end mx-3 mb-5 gap-4'>
            <Link href='/' className='text-gray-500 text-sm'>
                Cancel
            </Link>

            <Button type='Submit' className='px-5 py-1.5 text-sm rounded-full text-white' colorScheme={'orange'} isLoading={submittimg} loadingText={type}>
                {submittimg ? `${type}...` : type}
            </Button>
        </div>
        </form>
    </section>
  )
}

export default Form