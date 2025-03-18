import { Button } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";
import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import React from "react";
import { useForm } from "react-hook-form";

const PaymentDetailForm = () => {
    const form = useForm({
        resolver : "",
        defaultValues : {
            accountHolderName : "",
            ifsc : "",
            accountNumber : "",
            bankName : ""
        }
    })
    const onSubmit = (data) => {
        console.log("payment details form", data);
      };
    return (
        <div className="px-10 py-2">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                        control = {form.control} name = "accountHolderName"
                        render = {({ field }) => (
                            <FormItem>
                                <FormLabel>Account Holder Name</FormLabel>
                                <FormControl>
                                    <Input
                                        name = "accountHolderName"
                                        className="border w-full border-gray-700 p-5" 
                                        placeholder="Bui Huu Duy" {...field} 
                                    />
                                </FormControl>
                                <FormDescription>This is your public display name.</FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}    
                    />
                    <FormField
                        control = {form.control} name = "ifsc"
                        render = {({ field }) => (
                            <FormItem>
                                <FormLabel>IFSC Code</FormLabel>
                                <FormControl>
                                    <Input
                                        name = "ifsc"
                                        className="border w-full border-gray-700 p-5" 
                                        placeholder="YESB0000004" {...field} 
                                    />
                                </FormControl>
                                <FormDescription>This is your public display name.</FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}    
                    />
                    <FormField
                        control = {form.control} name = "accountNumber" type="password"
                        render = {({ field }) => (
                            <FormItem>
                                <FormLabel>Account Number</FormLabel>
                                <FormControl>
                                    <Input
                                        name = "accountNumber"
                                        className="border w-full border-gray-700 p-5" 
                                        placeholder="*******5433" {...field} 
                                    />
                                </FormControl>
                                <FormDescription>This is your public display name.</FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}    
                    />
                    <FormField
                        control = {form.control} name = "confirmAccountNumber"
                        render = {({ field }) => (
                            <FormItem>
                                <FormLabel>Confirm Account Number</FormLabel>
                                <FormControl>
                                    <Input
                                        name = "accountNumber"
                                        className="border w-full border-gray-700 p-5" 
                                        placeholder="Confirm Account Number" {...field} 
                                    />
                                </FormControl>
                                <FormDescription>This is your public display name.</FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}    
                    />
                    <FormField
                        control={form.control} name="bankName"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>Bank Name</FormLabel>
                            <FormControl>
                            <Input
                                {...field}
                                className="border w-full border-gray-700 py-5 px-5"
                                placeholder="MB BANK"
                            />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                        )}
                    />
                    <DialogClose>
                    <Button type="submit" className="w-full py-5 bg-white text-black">Submit</Button>
                    </DialogClose>
                </form>
            </Form>
        </div>
    )
}

export default PaymentDetailForm