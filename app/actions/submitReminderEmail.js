"use server";

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

export async function submitReminderEmail(email) {
    if (!email || !email.trim()) {
        return { success: false, error: "Please enter an email address." };
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return { success: false, error: "Please enter a valid email address." };
    }

    if (!supabaseUrl || !supabaseServiceKey) {
        return { success: false, error: "Service unavailable. Please try again later." };
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    try {
        const { error } = await supabase
            .from("reminder_emails")
            .insert({ email_address: email.trim().toLowerCase() });

        if (error) {
            if (error.code === "23505") {
                return { success: false, error: "This email is already registered for a reminder." };
            }
            console.error("Supabase error:", error);
            return { success: false, error: "Something went wrong. Please try again." };
        }

        return { success: true };
    } catch (err) {
        console.error("Submit error:", err);
        return { success: false, error: "Unable to connect. Please try again later." };
    }
}
