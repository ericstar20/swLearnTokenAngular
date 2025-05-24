import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http'; // ✅ Add this
import { provideAnimations } from '@angular/platform-browser/animations'; // optional

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(), // ✅ This is what you're missing
    provideAnimations(), // optional, if using animations
  ],
});
