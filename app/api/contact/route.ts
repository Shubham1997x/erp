import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    // Parse request body with error handling
    let body;
    try {
      body = await request.json();
    } catch (parseError) {
      console.error("JSON parse error:", parseError);
      return NextResponse.json(
        { error: "Invalid request format" },
        { status: 400 }
      );
    }

    const { firstName, lastName, email, phone, company, message } = body;

    // Basic validation
    if (!firstName || !lastName || !email || !phone || !company || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Sanitize inputs (basic sanitization)
    const sanitizedData = {
      firstName: String(firstName).trim().slice(0, 100),
      lastName: String(lastName).trim().slice(0, 100),
      email: String(email).trim().toLowerCase().slice(0, 255),
      phone: String(phone).trim().slice(0, 50),
      company: String(company).trim().slice(0, 200),
      message: String(message).trim().slice(0, 5000),
    };

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(sanitizedData.email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // TODO: Replace with your actual email service integration
    // Examples: SendGrid, Resend, Nodemailer, etc.
    
    // For now, we'll just log the data and return success
    // In production, you would send an email here
    try {
      console.log("Contact form submission:", {
        ...sanitizedData,
        timestamp: new Date().toISOString(),
      });

      // Simulate API delay (remove in production when using real email service)
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Return success response
      return NextResponse.json(
        {
          success: true,
          message: "Thank you! We'll get back to you within 24 hours.",
        },
        { status: 200 }
      );
    } catch (processingError) {
      console.error("Error processing contact form:", processingError);
      return NextResponse.json(
        { error: "Failed to process your request. Please try again later." },
        { status: 500 }
      );
    }
  } catch (error) {
    // Catch any unexpected errors
    console.error("Unexpected contact form error:", error);
    
    // Don't expose internal error details to client
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again later." },
      { status: 500 }
    );
  }
}

