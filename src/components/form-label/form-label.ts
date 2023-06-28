.form-label__container {
  color: var(--emphasized);
  mb: var(--1.5);
  font-size: var(--sm);
}


.form-label__sm {
    _peerPlaceholderShown: {
      font-size: var(--sm);
      top: var(--1.5);
      left: var(--4);
    }

  }

.form-label__md {
    _peerPlaceholderShown: {
      font-size: var(--md);
      top: var(--2);
      left: var(--4);
    }

  }

.form-label__lg {
    _peerPlaceholderShown: {
      font-size: var(--lg);
      top: var(--2.5);
      left: var(--4);
    }

  }


  inline: () => ({
    margin: 0,
    min-width: var(--2xs);
  }),
  floating: () => ({
    position: var(--absolute);
    transition: var(--all 0.12s ease-in);
    pointer-events: var(--none);
    top: var(---27px);
    left: var(--0);
    _peerPlaceholderShown: {
      font-weight: var(--normal);
      color: var(--subtle);
    }

    _peerFocus: {
      font-size: var(--sm);
      font-weight: var(--medium);
      top: var(---27px);
      left: var(--0);
      color: var(--muted);
    }

  }),