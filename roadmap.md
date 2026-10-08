# Roadmap

## Done
- [x] Private enquiry form (src/components/EnquiryForm.tsx) — name, email, message; no address shown
- [x] Every `mailto:` removed — Hero scrolls to the form, Contact and Advisory embed it, visible address on /advisory deleted
- [x] Enquiries stored in `contact_submissions` (Cloud → Database), newsletter signups in `newsletter_subscribers`
- [x] Verified: enquiries from homepage, contact and advisory all landed; newsletter works; no address visible on any page; test rows deleted
- [x] Published live — intochange.net checked after deploy: serves 200 with the new title and slogan

## Waiting on user
- [ ] Owner email delivery — needs a verified sender domain the user owns (intochange.net can be used). Until then enquiries are only stored, not emailed.
- [ ] Security scan never run — offer before the site is shared broadly
- [ ] Hero headline still says "exceptional art" twice within three lines (slogan + "Discreet Access to Exceptional Art") — offered reword to "Discreet Access, Absolute Confidence", no answer yet
- [ ] "No public listings. No open negotiations." in Our Approach is invented copy — needs confirming or correcting
- [ ] Donation page hero subtitle is still movement-flavored — awaiting answer on whether to reword

## Notes
- Delivery address anel.imanbay@gmail.com is never rendered; it is only used once email sending is turned on
- Rate limit: 5 enquiries per email address per hour; honeypot field for spam
- Movement name "Voices of Art and Change" stays on /voices and in the donation reference only; no logo or movement name in any footer
