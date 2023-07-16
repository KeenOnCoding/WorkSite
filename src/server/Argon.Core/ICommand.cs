namespace Argon.Core
{
    using MediatR;

    public interface ICommand : IRequest<Unit>
    {
    }

    public interface ICommand<TResult> : IRequest<TResult>
    {
    }
}
