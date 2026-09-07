import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PageShellComponent } from '../../core/layout/page-shell.component';
import { GIFT_CARD_AMOUNTS, GIFT_CARD_TYPES } from '../../features/commerce/data/commerce.data';
import { GiftCardAmount, GiftCardType } from '../../features/commerce/models/commerce.models';

@Component({
  selector: 'app-gift-cards',
  standalone: true,
  imports: [CommonModule, FormsModule, PageShellComponent],
  templateUrl: './gift-cards.component.html',
})
export class GiftCardsComponent {
  amounts: readonly GiftCardAmount[] = GIFT_CARD_AMOUNTS;
  cardTypes: readonly GiftCardType[] = GIFT_CARD_TYPES;

  selectedAmount = signal(50);
  selectedCardType = signal('digital');
  customAmount = '';
  recipientName = '';
  recipientEmail = '';
  personalMessage = '';
  purchaseMessage = '';

  totalDisplay = computed(() => {
    const amt = this.selectedAmount();
    return amt === 0 ? '$0.00' : `$${amt.toFixed(2)}`;
  });

  selectAmount(value: number) {
    this.selectedAmount.set(value);
  }

  purchase() {
    if (this.selectedAmount() === 0 && (!this.customAmount || Number(this.customAmount) <= 0)) {
      this.purchaseMessage = 'Enter a custom amount greater than $0 to continue.';
      return;
    }
    if (!this.recipientName.trim() || !this.recipientEmail.trim()) {
      this.purchaseMessage = 'Add the recipient name and email to continue.';
      return;
    }
    this.purchaseMessage = `Your ${this.selectedCardType()} gift card is ready for checkout.`;
  }
}
