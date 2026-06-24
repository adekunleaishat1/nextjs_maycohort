"use client";

interface ErrorProps {
error: Error;
reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorProps) {
    return (
    <main className="max-w-3xl mx-auto p-6">
    <h1 className="text-2xl font-bold text-red-600">Something went wrong</h1>
    <p className="text-gray-600 mt-2">{error.message}</p>
    <button
    onClick={reset}
    className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
    >
    Try again
    </button>
    </main>
);
}