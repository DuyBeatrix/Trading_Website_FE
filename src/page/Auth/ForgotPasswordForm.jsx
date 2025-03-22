import React from "react"; 
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";
import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const ForgotPassWordForm = () => {
    const form = useForm ( {
        resolver : "",
        defaultValues : {
            email : "",
        }
    })
    const onSubmit = (data) => {
        console.log("payment details form", data);
    };

    return (
        <div className="py-2">
            <h1 className="text-xl font-bold text-center pb-3">Forgot password</h1>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                        control = {form.control} name = "email"
                        render = {({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input
                                        name = "email"
                                        className="border w-full border-gray-700 p-5" 
                                        placeholder="Enter your email" {...field} 
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}    
                    />
                    <Button type="submit" className="w-full py-5 bg-white text-black">Submit</Button>
                    
                </form>
            </Form>
        </div>
    )
}

export default ForgotPassWordForm