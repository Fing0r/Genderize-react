import React from "react";

export interface ITextInput {
    name: string,
    onChange(e: React.FormEvent): void
}

export interface ISpanMessage {
    message: string,
    gender: string
}
