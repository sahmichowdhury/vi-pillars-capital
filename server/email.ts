/**
 * Email helpers — powered by Resend
 * Sends transactional emails from noreply@vipillarscapital.com
 */
import { Resend } from "resend";
import { ENV } from "./_core/env";

const FROM_ADDRESS = "VI Pillars Capital <noreply@vipillarscapital.com>";

function getResendClient(): Resend {
  if (!ENV.resendApiKey) {
    throw new Error("RESEND_API_KEY is not configured");
  }
  return new Resend(ENV.resendApiKey);
}

/**
 * Send an approval notification email to a newly approved LP investor.
 */
export async function sendApprovalEmail(params: {
  to: string;
  name: string;
  portalUrl: string;
}): Promise<{ success: boolean; error?: string }> {
  try {
    const resend = getResendClient();

    const { error } = await resend.emails.send({
      from: FROM_ADDRESS,
      to: params.to,
      subject: "Your VI Pillars Capital Portal Access Has Been Approved",
      html: buildApprovalEmailHtml(params),
    });

    if (error) {
      console.error("[Email] Resend error:", error);
      return { success: false, error: error.message };
    }

    console.log(`[Email] Approval email sent to ${params.to}`);
    return { success: true };
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error("[Email] Failed to send approval email:", message);
    return { success: false, error: message };
  }
}

function buildApprovalEmailHtml(params: {
  name: string;
  portalUrl: string;
}): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Portal Access Approved</title>
</head>
<body style="margin:0;padding:0;background-color:#1a1612;font-family:'Georgia',serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#1a1612;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background-color:#221e18;border:1px solid rgba(255,255,255,0.08);border-radius:12px;overflow:hidden;">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#221e18 0%,#2d2620 100%);padding:40px 40px 32px;border-bottom:1px solid rgba(255,255,255,0.06);">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <p style="margin:0;font-size:13px;font-weight:700;letter-spacing:3px;text-transform:uppercase;color:#c9a96e;">VI PILLARS CAPITAL</p>
                    <h1 style="margin:12px 0 0;font-size:26px;font-weight:700;color:#ffffff;line-height:1.3;">LP Portal Access<br/><em style="color:#c9a96e;">Approved</em></h1>
                  </td>
                  <td align="right" valign="top">
                    <div style="width:48px;height:48px;background:rgba(201,169,110,0.12);border:1px solid rgba(201,169,110,0.25);border-radius:10px;display:inline-block;text-align:center;line-height:48px;font-size:22px;">✓</div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:36px 40px;">
              <p style="margin:0 0 16px;font-size:16px;color:rgba(255,255,255,0.85);line-height:1.6;">
                Dear ${params.name},
              </p>
              <p style="margin:0 0 24px;font-size:15px;color:rgba(255,255,255,0.65);line-height:1.7;">
                We are pleased to inform you that your application for access to the VI Pillars Capital Limited Partner Portal has been <strong style="color:#c9a96e;">approved</strong>.
              </p>
              <p style="margin:0 0 32px;font-size:15px;color:rgba(255,255,255,0.65);line-height:1.7;">
                You can now sign in to view your investments, access documents such as K-1s and operating agreements, and track your portfolio in real time.
              </p>

              <!-- CTA Button -->
              <table cellpadding="0" cellspacing="0" style="margin:0 0 32px;">
                <tr>
                  <td style="background-color:#c9a96e;border-radius:8px;">
                    <a href="${params.portalUrl}" style="display:inline-block;padding:14px 32px;font-family:Arial,sans-serif;font-size:15px;font-weight:700;color:#1a1612;text-decoration:none;letter-spacing:0.5px;">
                      Access Your Portal →
                    </a>
                  </td>
                </tr>
              </table>

              <p style="margin:0 0 8px;font-size:13px;color:rgba(255,255,255,0.35);line-height:1.6;">
                If the button above does not work, copy and paste this link into your browser:
              </p>
              <p style="margin:0 0 32px;font-size:12px;color:rgba(201,169,110,0.6);word-break:break-all;">
                ${params.portalUrl}
              </p>

              <hr style="border:none;border-top:1px solid rgba(255,255,255,0.07);margin:0 0 28px;" />

              <p style="margin:0;font-size:13px;color:rgba(255,255,255,0.35);line-height:1.6;">
                If you have any questions, please contact us at
                <a href="mailto:info@vipillarscapital.com" style="color:#c9a96e;text-decoration:none;">info@vipillarscapital.com</a>.
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color:#1d1a15;padding:24px 40px;border-top:1px solid rgba(255,255,255,0.06);">
              <p style="margin:0;font-size:12px;color:rgba(255,255,255,0.25);line-height:1.6;text-align:center;">
                © ${new Date().getFullYear()} VI Pillars Capital. All rights reserved.<br/>
                This email was sent because you registered for LP portal access.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}
