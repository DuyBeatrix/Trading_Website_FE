import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useDispatch } from "react-redux";
import { register } from "@/State/Authentication/Action";

const RegisterForm = () => 
{
    const dispatch = useDispatch()
    const form = useForm({
            resolver : "",
            defaultValues : {
                fullName : "",
                email : "",
                password : ""
            }
        })
    const onSubmit = (data) => {
        dispatch(register(data))
        console.log("payment details form", data);
    };

    return (
        <div className="py-2">
            <h1 className="text-xl font-bold text-center pb-3">Rgister</h1>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                        control = {form.control} name = "fullName"
                        render = {({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input
                                        name = "fullName"
                                        className="border w-full border-gray-700 p-5" 
                                        placeholder="Enter your name" {...field} 
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}    
                    />
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
                    <FormField
                        control = {form.control} name = "password"
                        render = {({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input
                                        type="password"
                                        name = "password"
                                        className="border w-full border-gray-700 p-5" 
                                        placeholder="Enter the password" {...field} 
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}    
                    />
                    <FormField
                        control = {form.control} name = "confirmPassword"
                        render = {({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input
                                        name = "confirmPassword"
                                        className="border w-full border-gray-700 p-5" 
                                        placeholder="Confirm the password" {...field} 
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

export default RegisterForm