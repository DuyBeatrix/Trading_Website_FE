import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useDispatch } from "react-redux";
import { login } from "@/State/Authentication/Action";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const form = useForm ( {
        resolver : "",
        defaultValues : {
            email : "",
            password : ""
        }
    })
    const onSubmit = (data) => {
        dispatch(login({data, navigate}))
        console.log("Login form", data);
    };

    return (
        <div className="py-2">
            <h1 className="text-xl font-bold text-center pb-3">Login</h1>
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
                    <FormField
                        control = {form.control} name = "password" type="password"
                        render = {({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input
                                        name = "password"
                                        className="border w-full border-gray-700 p-5" 
                                        placeholder="Enter the password" {...field} 
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

export default LoginForm