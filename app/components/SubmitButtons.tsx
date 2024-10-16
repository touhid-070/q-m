"use client"
import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";
import Image from "next/image";
import { Loader2 } from "lucide-react";
import GoogleLogo from '@/public/google.png'
import GitHubLogo from '@/public/github.png'
import { cn } from "@/lib/utils";

interface iAppProps{
    text: string;
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | null | undefined;

    className?:string,
}

export function SubmitButton({text,variant,className} : iAppProps){
    const {pending} = useFormStatus()

    return (
        <>
        {pending?(
            <Button disabled variant='outline' className={cn("w-fit",className)}>
                <Loader2 className="size-4 mr-2 animate-spin"/> Please wait
            </Button>
        ):(
            <Button type="submit" variant={variant} className={cn("w-fit",className)}>{text}</Button>
        )}
        </>
    )
}

export function GoogleAuthButton(){
    const {pending} = useFormStatus();

    return (
        <>
        {pending?(
            <Button disabled variant="outline" className="w-full">
                <Loader2 className="size-4 mr-2 animate-spin"/> Please wait
            </Button>
        ):(
            <Button variant="outline" className="w-full">
                <Image src={GoogleLogo} alt="GoogleLogo" className="size-7 mr-2"/> Sign in with Google
            </Button>
        )}
        </>
    )
}


export function GitHubAuthButton(){
    const {pending} = useFormStatus();

    return (
        <>
        {pending?(
            <Button disabled variant="outline" className="w-full">
                <Loader2 className="size-4 mr-2 animate-spin"/> Please wait
            </Button>
        ):(
            <Button variant="outline" className="w-full">
                <Image src={GitHubLogo} alt="GitHubLogo" className="size-7 mr-2"/> Sign in with GitHub
            </Button>
        )}
        </>
    )
}